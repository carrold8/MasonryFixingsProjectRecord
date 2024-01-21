import { api } from "../ApiConfig";

const MaintenanceAPIs = {

    PostUser: (newUser) => { 
        const response =  api.request({
           url: 'maintenance/user',
           method: 'POST',
           data: newUser
        })
        return response
   },

   PutUser: (userID, editedUser) => { 
    const response =  api.request({
       url: 'maintenance/user/' + userID,
       method: 'PUT',
       data: editedUser
    })
    return response
    },
    DeleteUser: (userID) => { 
      const response =  api.request({
         url: 'maintenance/user/' + userID,
         method: 'DELETE'
      })
      return response
      },

    PutUserPassword: (userID, putJSON) => {
      const response = api.request({
         url: 'maintenance/user/' + userID + '/password',
         method: 'PUT',
         data: putJSON
      })
      return response
    },

    PostCompanyType: (newCompanyType) => { 
        const response =  api.request({
           url: 'maintenance/company-type',
           method: 'POST',
           data: newCompanyType
        })
        return response
   },

   PutCompanyType: (companyTypeID, editedCompanyType) => { 
    const response =  api.request({
       url: 'maintenance/company-type/' + companyTypeID,
       method: 'PUT',
       data: editedCompanyType
    })
    return response
    },
    DeleteCompanyType: (companyTypeID) => { 
      const response =  api.request({
         url: 'maintenance/company-type/' + companyTypeID,
         method: 'DELETE'
      })
      return response
   },

    PostEmployeeType: (newEmployeeType) => { 
        const response =  api.request({
           url: 'maintenance/employee-type',
           method: 'POST',
           data: newEmployeeType
        })
        return response
   },

   PutEmployeeType: (employeeTypeID, editedEmployeeType) => { 
    const response =  api.request({
       url: 'maintenance/employee-type/' + employeeTypeID,
       method: 'PUT',
       data: editedEmployeeType
    })
    return response
    },
    DeleteEmployeeType: (employeeTypeID) => { 
      const response =  api.request({
         url: 'maintenance/employee-type/' + employeeTypeID,
         method: 'DELETE',
      })
      return response
   },

    PostCategory: (newCategory) => { 
        const response =  api.request({
           url: 'maintenance/category',
           method: 'POST',
           data: newCategory
        })
        return response
   },

   PutCategory: (categoryID, editedCategory) => { 
    const response =  api.request({
       url: 'maintenance/category/' + categoryID,
       method: 'PUT',
       data: editedCategory
    })
    return response
    },
    DeleteCategory: (categoryID) => { 
      const response =  api.request({
         url: 'maintenance/category/' + categoryID,
         method: 'DELETE'
      })
      return response
   },

    PostSector: (newSector) => { 
        const response =  api.request({
           url: 'maintenance/sector',
           method: 'POST',
           data: newSector
        })
        return response
   },
   PutSector: (sectorID, editedSector) => { 
    const response =  api.request({
       url: 'maintenance/sector/' + sectorID,
       method: 'PUT',
       data: editedSector
    })
    return response
    },
    DeleteSector: (sectorID) => { 
      const response =  api.request({
         url: 'maintenance/sector/' + sectorID,
         method: 'DELETE'
      })
      return response
      },

    PostTask: (newTask) => { 
        const response =  api.request({
           url: 'maintenance/task',
           method: 'POST',
           data: newTask
        })
        return response
   },
   PutTask: (taskID, editedTask) => { 
    const response =  api.request({
       url: 'maintenance/task/' + taskID,
       method: 'PUT',
       data: editedTask
    })
    return response
    },
    DeleteTask: (taskID) => { 
      const response =  api.request({
         url: 'maintenance/task/' + taskID,
         method: 'DELETE'
      })
      return response
      },

    PostTaskType: (newTaskType) => { 
        const response =  api.request({
           url: 'maintenance/task-type',
           method: 'POST',
           data: newTaskType
        })
        return response
   },
   PutTaskType: (taskTypeID, editedTaskType) => { 
    const response =  api.request({
       url: 'maintenance/task-type/' + taskTypeID,
       method: 'PUT',
       data: editedTaskType
    })
    return response
    },
    DeleteTaskType: (taskTypeID) => { 
      const response =  api.request({
         url: 'maintenance/task-type/' + taskTypeID,
         method: 'DELETE'
      })
      return response
   },


    PostFrameMaterial: (newFrameMaterial) => { 
        const response =  api.request({
           url: 'maintenance/frame-material',
           method: 'POST',
           data: newFrameMaterial
        })
        return response
   },
   PutFrameMaterial: (frameMaterialID, editedFrameMaterial) => { 
        const response =  api.request({
                url: 'maintenance/frame-material/' + frameMaterialID,
                method: 'PUT',
                data: editedFrameMaterial
            })
        return response
    },
   DeleteFrameMaterial: (frameMaterialID) => { 
   const response =  api.request({
            url: 'maintenance/frame-material/' + frameMaterialID,
            method: 'DELETE'
         })
   return response
  },

    PostFloorMaterial: (newFloorMaterial) => { 
        const response =  api.request({
           url: 'maintenance/floor-material',
           method: 'POST',
           data: newFloorMaterial
        })
        return response
   },
   PutFloorMaterial: (floorMaterialID, editedFloorMaterial) => { 
        const response =  api.request({
                url: 'maintenance/floor-material/' + floorMaterialID,
                method: 'PUT',
                data: editedFloorMaterial
            })
        return response
    },
    DeleteFloorMaterial: (floorMaterialID) => { 
      const response =  api.request({
              url: 'maintenance/floor-material/' + floorMaterialID,
              method: 'DELETE'
          })
      return response
  },

    PostEnvelopeMaterial: (newEnvelopeMaterial) => { 
        const response =  api.request({
           url: 'maintenance/envelope-material',
           method: 'POST',
           data: newEnvelopeMaterial
        })
        return response
   },
   PutEnvelopeMaterial: (envelopeMaterialID, editedEnvelopeMaterial) => { 
        const response =  api.request({
                url: 'maintenance/envelope-material/' + envelopeMaterialID,
                method: 'PUT',
                data: editedEnvelopeMaterial
            })
        return response
    },
    DeleteEnvelopeMaterial: (envelopeMaterialID) => { 
      const response =  api.request({
              url: 'maintenance/envelope-material/' + envelopeMaterialID,
              method: 'DELETE'
          })
      return response
  },

    PostRoofMaterial: (newRoofMaterial) => { 
        const response =  api.request({
           url: 'maintenance/roof-material',
           method: 'POST',
           data: newRoofMaterial
        })
        return response
   },
   PutRoofMaterial: (roofMaterialID, editedRoofMaterial) => { 
        const response =  api.request({
                url: 'maintenance/roof-material/' + roofMaterialID,
                method: 'PUT',
                data: editedRoofMaterial
            })
        return response
    },
    DeleteRoofMaterial: (roofMaterialID) => { 
      const response =  api.request({
              url: 'maintenance/roof-material/' + roofMaterialID,
              method: 'DELETE'
          })
      return response
  },

    PostPartitioningMaterial: (newPartitioningMaterial) => { 
        const response =  api.request({
           url: 'maintenance/partitioning-material',
           method: 'POST',
           data: newPartitioningMaterial
        })
        return response
   },
   PutPartitioningMaterial: (partitioningMaterialID, editedPartitioningMaterial) => { 
        const response =  api.request({
                url: 'maintenance/partitioning-material/' + partitioningMaterialID,
                method: 'PUT',
                data: editedPartitioningMaterial
            })
        return response
    },
    DeletePartitioningMaterial: (partitioningMaterialID) => { 
      const response =  api.request({
              url: 'maintenance/partitioning-material/' + partitioningMaterialID,
              method: 'DELETE'
          })
      return response
  },

    PostProduct: (postJSON) => { 
      const response =  api.request({
         url: 'maintenance/product',
         method: 'POST',
         data: postJSON
      })
      return response
   },
   PutProduct: (productID, putJSON) => { 
      const response =  api.request({
              url: 'maintenance/product/' + productID,
              method: 'PUT',
              data: putJSON
          })
      return response
  },
  DeleteProduct: (productID) => { 
   const response =  api.request({
           url: 'maintenance/product/' + productID,
           method: 'DELETE'
       })
   return response
},


}
export default MaintenanceAPIs;