using Contactcs_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Contacts_API.Models
{
    public class ContactsContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ContactsContext(DbContextOptions<ContactsContext> options): base(options)
        {
         
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasData(
            new Contact
            {
                id = 1,
                name = "Михаил",
                surname = "Белоусов",
                email = "o@outlook.com",
                birthday = "18.05.1990"
            },
            new Contact
            {
                id = 2,
                name = "Руслан",
                surname = "Лапин",
                email = "hr6zdl@yandex.ru",
                birthday = "19.05.1992"
            },
            new Contact
            {
                id = 3,
                name = "Павел",
                surname = "Исаков",
                email = "kaft93x@outlook.com",
                birthday = "29.06.1995"
            },
            new Contact
            {
                id = 4,
                name = "Пётр",
                surname = "Мельников",
                email = "dcu@yandex.ru",
                birthday = "20.05.1995"
            },
            new Contact
            {
                id = 5,
                name = "Витольд",
                surname = "Алчевский",
                email = "pa5h@mail.ru",
                birthday = "21.05.1998"
            },
            new Contact
            {
                id = 6,
                name = "Йомер",
                surname = "Дзюба",
                email = "281av0@gmail.com",
                birthday = "10.05.2002"
            },
            new Contact
            {
                id = 7,
                name = "Филипп",
                surname = "Жуков",
                email = "8edmfh@outlook.com",
                birthday = "13.02.2007"
            },
            new Contact
            {
                id = 8,
                name = "Дарий",
                surname = "Титов",
                email = "sfn13i@mail.ru",
                birthday = "22.04.2008"
            },
            new Contact
            {
                id = 9,
                name = "Цезарь",
                surname = "Королёв",
                email = "g0orc3x1@outlook.com",
                birthday = "14.12.2020"
            },
            new Contact
            {
                id = 10,
                name = "Алёна",
                surname = "Скляренко",
                email = "rv7bp@gmail.com",
                birthday = "14.12.2020"
            }




            );
        }
    }
}
