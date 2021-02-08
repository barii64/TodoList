using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList1.Models;

namespace TodoList1
{
    public class MultipleModel
    {
        public IEnumerable<TodoList1.Models.TodoItem> ItemsList;
        public TodoItem item;

    }

}
