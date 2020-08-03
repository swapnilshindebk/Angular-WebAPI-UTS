using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Users.Domain.User
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        public string Name { get; set; }
        public string EmailID { get; set; }
        public bool IsAdmin { get; set; }
        public string MobileNumber { get; set; }
        public string Status { get; set; }
    }
}
