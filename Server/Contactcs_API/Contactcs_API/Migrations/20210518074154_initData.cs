using Microsoft.EntityFrameworkCore.Migrations;

namespace Contactcs_API.Migrations
{
    public partial class initData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "id", "birthday", "email", "name", "surname" },
                values: new object[] { 1, "06.05.1990", "o@outlook.com", "Михаил", "Белоусов" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "id", "birthday", "email", "name", "surname" },
                values: new object[] { 2, "06.03.1992", "hr6zdl@yandex.ru", "Руслан", "Лапин" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "id", "birthday", "email", "name", "surname" },
                values: new object[] { 3, "29.06.1995", "kaft93x@outlook.com", "Павел", "Исаков" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 3);
        }
    }
}
