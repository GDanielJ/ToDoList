using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Dtos
{
    public class ToDoListItemToCreateDto
    {
        public int Id { get; set; }
        public string ItemText { get; set; }
        public DateTime Created { get; set; }
        public DateTime CompleteBy { get; set; }
        public bool Completed { get; set; }

        public ToDoListItemToCreateDto()
        {
            Created = DateTime.Now;
            Completed = false;
        }
    }
}
