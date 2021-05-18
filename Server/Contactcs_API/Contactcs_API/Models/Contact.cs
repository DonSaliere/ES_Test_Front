using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contactcs_API.Models
{
    public class Contact
    {
        public int id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string birthday { get; set; }
    }
}
