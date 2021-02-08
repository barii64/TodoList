using Microsoft.EntityFrameworkCore;
using TodoList1.Models;


namespace TodoList1.Data
{
    public class MvcTodoContext : DbContext
    {
        public MvcTodoContext(DbContextOptions<MvcTodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoList { get; set; }

    }
}
