import os

from contaxy.clients import AuthClient, FileClient
from contaxy.clients import DeploymentClient
from contaxy.clients.shared import BaseUrlSession
from contaxy.config import API_TOKEN_NAME

from lab_client.utils.text_utils import simplify
from lab_client.environments.file import FileEnvironment
from lab_client.environments.deployment import DeploymentEnvironment


class Environment(FileEnvironment, DeploymentEnvironment):
    """
    Initialize environment from a Lab instance. The Environment manages all files (models & datasets), services, experiments
    and provides access to the Lab API. Locally, it has a dedicated folder structure to save models, datasets, analysis and experiment data.

    # Arguments
        project (string): Selected project (optional).
        root_folder (string): Root folder of the environment. If not provided, it will use `DATA_ENVIRONMENT` value
         as the root folder. If `temp`, a temporary folder will be used as root folder and removed on exit (optional).
        lab_endpoint (string): Endpoint URL of a Lab instance (optional).
        lab_api_token (string): API Token for accessing the selected Lab instance (optional).
    """

    _ENV_NAME_ENV_ROOT_PATH = "DATA_ENVIRONMENT"
    _TEMP_ROOT_FOLDER = "temp"

    # Lab related environment variables
    _ENV_NAME_LAB_ENDPOINT = "LAB_API_ENDPOINT"
    _ENV_NAME_LAB_PROJECT = "LAB_PROJECT"
    _ENV_NAME_LAB_API_TOKEN = "LAB_API_TOKEN"

    # local folders
    _LOCAL_ENV_FOLDER_NAME = "environment"
    _DATASETS_FOLDER_NAME = "datasets"
    _MODELS_FOLDER_NAME = "models"
    _DOWNLOADS_FOLDER_NAME = "downloads"

    _LOCAL_OPERATOR = "local"
    _LOCAL_PROJECT = "local"

    _LAB_USER_PROJECT_PREFIX = "lab-user-"

    class DataType:
        MODEL = "model"
        DATASET = "dataset"
        BACKUP = "backup"

    def __init__(
        self,
        project: str = None,
        root_folder: str = None,
        lab_endpoint: str = None,
        lab_api_token: str = None,
    ):
        self._connected = False

        if lab_endpoint is None:
            lab_endpoint = os.getenv(self._ENV_NAME_LAB_ENDPOINT)

        if lab_api_token is None:
            lab_api_token = os.getenv(self._ENV_NAME_LAB_API_TOKEN)

        if project is None:
            project = os.getenv(self._ENV_NAME_LAB_PROJECT)

        self.project = project
        self.lab_api_token = lab_api_token
        self.lab_endpoint = lab_endpoint

        # Initialize Contaxy clients
        self._endpoint_client = BaseUrlSession(lab_endpoint)
        # TODO: Enable SSL verification!
        self._endpoint_client.verify = False
        self._auth_client = AuthClient(self._endpoint_client)
        self._file_client = FileClient(self._endpoint_client)
        self._deployment_client = DeploymentClient(self._endpoint_client)

        self._file_handler = None
        self._job_handler = None
        self._service_handler = None

        self._check_connection()

        # Set root folder
        if not root_folder:
            # use environment variable
            root_folder = os.getenv(self._ENV_NAME_ENV_ROOT_PATH)

        if not root_folder:
            # create local environment
            root_folder = self._LOCAL_ENV_FOLDER_NAME

        if root_folder == self._TEMP_ROOT_FOLDER:
            # if folder is temp -> create temporary folder that will be removed on exit
            import atexit
            import shutil
            import tempfile

            root_folder = tempfile.mkdtemp()

            # automatically remove temp directory if process exits
            def cleanup():
                shutil.rmtree(root_folder)

            atexit.register(cleanup)

        if not os.path.exists(root_folder):
            os.makedirs(root_folder)

        self._root_folder = root_folder

    def is_connected(self) -> bool:
        """
        Returns `True`, if the environment is connected to a Lab instance.
        """
        return self._connected

    def print_info(self, host_info: bool = False):
        """
        Prints out a summary of the configuration of the environment instance. Can be used as watermark for notebooks.
        """
        print("Environment Info:")
        print("")
        if self._connected:
            print("Lab Endpoint: " + self.lab_endpoint)
        else:
            print("Lab Endpoint: Not connected!")
        print("")
        from lab_client._about import __version__

        print("Client Version: " + str(__version__))
        print("Configured Project: " + self.project)
        print("")
        print("Folder Structure: ")
        print("- Root folder: " + os.path.abspath(self.root_folder))
        print(" - Project folder: " + self.project_folder)
        print(" - Datasets folder: " + self.datasets_folder)
        print(" - Models folder: " + self.models_folder)

    def _check_connection(self):
        # We check that everything is working by querying the endpoint to list the files.
        token_information = self._auth_client.introspect_token(self.lab_api_token)
        if not token_information.active:
            raise ConnectionError("Not valid token")
        # Set token as a cookie for all other requests
        self._endpoint_client.cookies.set(API_TOKEN_NAME, self.lab_api_token)
        # Will raise exception if connection fails.
        self._file_client.list_files(self.project)
        self._connected = True

    @property
    def root_folder(self) -> str:
        """
        Returns the path to the root folder of the environment.
        """

        return self._root_folder

    @property
    def project_folder(self) -> str:
        """
        Returns the path to the project folder of the environment.
        """
        folder = os.path.join(self.root_folder, simplify(self.project))

        if not os.path.exists(folder):
            os.makedirs(folder)

        return folder

    @property
    def datasets_folder(self) -> str:
        """
        Returns the path to the datasets folder of the selected project.
        """
        folder = os.path.join(self.project_folder, self._DATASETS_FOLDER_NAME)

        if not os.path.exists(folder):
            os.makedirs(folder)

        return folder

    @property
    def models_folder(self) -> str:
        """
        Returns the path to the models folder of the selected project.
        """
        folder = os.path.join(self.project_folder, self._MODELS_FOLDER_NAME)

        if not os.path.exists(folder):
            os.makedirs(folder)

        return folder
