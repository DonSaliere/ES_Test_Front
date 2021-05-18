using Microsoft.EntityFrameworkCore.Migrations;

namespace Contactcs_API.Migrations
{
    public partial class add_1_Contact : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "id", "birthday", "email", "name", "surname" },
                values: new object[] { 4, "29.06.1995", "kaft93x@outlook.com", "Павел", "Исаков" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 4);
        }
    }
}
