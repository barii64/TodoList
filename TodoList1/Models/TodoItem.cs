using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoList1.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public bool IsDone { get; set; }
    }

}
