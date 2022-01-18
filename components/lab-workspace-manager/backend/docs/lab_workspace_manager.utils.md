<!-- markdownlint-disable -->

<a href="https://github.com/ml-tooling/contaxy/blob/main/components/lab-workspace-manager/backend/src/lab_workspace_manager/utils.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `lab_workspace_manager.utils`




**Global Variables**
---------------
- **CONTAXY_API_ENDPOINT**

---

<a href="https://github.com/ml-tooling/contaxy/blob/main/components/lab-workspace-manager/backend/src/lab_workspace_manager/utils.py#L21"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_component_manager`

```python
get_component_manager(
    request: Request,
    token: str = Depends(APITokenExtractor)
) → Generator[ComponentManager, NoneType, NoneType]
```

Returns the initialized component manager. 

This is used as FastAPI dependency and called for every request. 




---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
