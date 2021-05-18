using Microsoft.EntityFrameworkCore.Migrations;

namespace Contactcs_API.Migrations
{
    public partial class add_new_Contacts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 1,
                column: "birthday",
                value: "18.05.1990");

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 2,
                column: "birthday",
                value: "19.05.1992");

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 4,
                columns: new[] { "birthday", "email", "name", "surname" },
                values: new object[] { "20.05.1995", "dcu@yandex.ru", "Пётр", "Мельников" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "id", "birthday", "email", "name", "surname" },
                values: new object[,]
                {
                    { 5, "21.05.1998", "pa5h@mail.ru", "Витольд", "Алчевский" },
                    { 6, "10.05.2002", "281av0@gmail.com", "Йомер", "Дзюба" },
                    { 7, "13.02.2007", "8edmfh@outlook.com", "Филипп", "Жуков" },
                    { 8, "22.04.2008", "sfn13i@mail.ru", "Дарий", "Титов" },
                    { 9, "14.12.2020", "g0orc3x1@outlook.com", "Цезарь", "Королёв" },
                    { 10, "14.12.2020", "rv7bp@gmail.com", "Алёна", "Скляренко" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 10);

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 1,
                column: "birthday",
                value: "06.05.1990");

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 2,
                column: "birthday",
                value: "06.03.1992");

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "id",
                keyValue: 4,
                columns: new[] { "birthday", "email", "name", "surname" },
                values: new object[] { "29.06.1995", "kaft93x@outlook.com", "Павел", "Исаков" });
        }
    }
}
