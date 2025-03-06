using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hardware
{
    public class CustomerDbcontext : DbContext
    {
        public DbSet<Customers> customers { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\C#\HardwareDB\customers.db");
        }//connecting with sqlite database
    }
}
