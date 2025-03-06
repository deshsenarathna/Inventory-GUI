using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hardware
{
    public class Customers
    {

        [Key]

        public int CustomerId { get; set; }
        public string customer { get; set; }
        public string Gender { get; set; }
        public int PhoneNo { get; set; }
    }
}
