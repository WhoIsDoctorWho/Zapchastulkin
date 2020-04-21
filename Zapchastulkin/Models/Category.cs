using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zapchastulkin.Models
{
    public class Category
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public List<Unit> Units { get; set; }
    }
}
