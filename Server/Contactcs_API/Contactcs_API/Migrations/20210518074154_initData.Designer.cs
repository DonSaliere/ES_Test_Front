// <auto-generated />
using Contacts_API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Contactcs_API.Migrations
{
    [DbContext(typeof(ContactsContext))]
    [Migration("20210518074154_initData")]
    partial class initData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Contactcs_API.Models.Contact", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("birthday");

                    b.Property<string>("email");

                    b.Property<string>("name");

                    b.Property<string>("surname");

                    b.HasKey("id");

                    b.ToTable("Contacts");

                    b.HasData(
                        new { id = 1, birthday = "06.05.1990", email = "o@outlook.com", name = "Михаил", surname = "Белоусов" },
                        new { id = 2, birthday = "06.03.1992", email = "hr6zdl@yandex.ru", name = "Руслан", surname = "Лапин" },
                        new { id = 3, birthday = "29.06.1995", email = "kaft93x@outlook.com", name = "Павел", surname = "Исаков" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
