using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Dtos
{
    public class ToDoListItemToUpdateDto
    {
        [Required]
        public string ItemText { get; set; }
        [Required]
        public DateTime Created { get; set; }
        [Required]
        public DateTime CompleteBy { get; set; }
        [Required]
        public bool Completed { get; set; }
        //[Required]
        //public int UserId { get; set; }
    }
}
