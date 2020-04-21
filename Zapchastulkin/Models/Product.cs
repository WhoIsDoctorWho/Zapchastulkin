using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zapchastulkin.Models
{
    public class Product
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string Brand { get; set; }
        public string Vendor { get; set; }
        public string Description { get; set; }
    }
}
