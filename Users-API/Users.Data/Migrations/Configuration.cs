namespace Users.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Users.Domain.User;

    internal sealed class Configuration : DbMigrationsConfiguration<Users.Data.Context.AppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Users.Data.Context.AppDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
            context.Users.Add(new User { Name = "Rohit Sharma", EmailID = "rohit@bcci.com", IsAdmin = false, MobileNumber = "7654342526", Status = "Inactive" });
        }
    }
}
