using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Data
{
    public interface IToDoListRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
    }
}
