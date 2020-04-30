using System.Collections.Generic;

namespace Zapchastulkin.Models
{
    public class Unit : Entity
    {        
        public int CategoryId { get; set; }        
        public List<Product> Products { get; set; }
    }
}
