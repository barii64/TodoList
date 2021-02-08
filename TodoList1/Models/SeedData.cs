using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using TodoList1.Data;

namespace TodoList1.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MvcTodoContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<MvcTodoContext>>()))
            {
                // Look for any movies.
                if (context.TodoList.Any())
                {
                    return;   // DB has been seeded
                }

                context.TodoList.AddRange(
                    new TodoItem
                    {
                        Title = "When Harry Met Sally",
                        IsDone = true
                    },

                    new TodoItem
                    {
                        Title = "Ghostbusters ",
                        IsDone = false
                    },

                    new TodoItem
                    {
                        Title = "Ghostbusters 2",
                        IsDone = true
                    },

                    new TodoItem
                    {
                        Title = "Rio Bravo",
                        IsDone = false
                    }
                );
                context.SaveChanges();
            }

        }

    }
}
