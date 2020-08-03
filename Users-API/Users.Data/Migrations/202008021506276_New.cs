namespace Users.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class New : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "Status", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Users", "Status", c => c.Int(nullable: false));
        }
    }
}
