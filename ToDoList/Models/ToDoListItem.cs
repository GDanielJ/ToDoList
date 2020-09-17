using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class ToDoListItem
    {
        public int Id { get; set; }
        public string ItemText { get; set; }
        public DateTime Created { get; set; }
        public DateTime CompleteBy { get; set; }
        public bool Completed { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
