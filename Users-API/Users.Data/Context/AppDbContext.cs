using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Users.Domain.User;

namespace Users.Data.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(): base("name=DB_CONNECTION")
        {

        }

        // Property to access the table Users
        public DbSet<Domain.User.User> Users { get; set; }
    }
}
