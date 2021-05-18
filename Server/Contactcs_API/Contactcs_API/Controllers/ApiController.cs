using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contactcs_API.Models;
using Contacts_API.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Contactcs_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        ContactsContext db;

        public ApiController(ContactsContext context)
        {
            db = context;
        }

        [HttpGet]
        public ActionResult<List<Contact>> Get()
        {
            var contacts = db.Contacts.ToList();

            return contacts;
        }

        [HttpPost("[action]")]
        public ActionResult<int> Update([FromBody] Contact contact)
        {

           if (contact.id > 0)
           {
               var con = db.Contacts.FirstOrDefault(c => c.id == contact.id);
               con.name = contact.name;
               con.surname = contact.surname;
               con.email = contact.email;
               con.birthday = contact.birthday;
           }
           else
           {
               db.Contacts.Add(contact);
           }
            
            db.SaveChanges();

            return contact.id;
        }

        [HttpPost("[action]")]
        public ActionResult<string> Delete([FromBody] int id)
        {
            var con = db.Contacts.FirstOrDefault(c => c.id == id);

            db.Contacts.Remove(con);

            db.SaveChanges();

            return "OK";
        }
    }
}
