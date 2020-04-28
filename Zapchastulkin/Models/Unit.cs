using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Zapchastulkin.Models
{
    public class Unit : Entity
    {
        [Column("CategoryId")]
        public int CategoryFK { get; set; }        
        public List<Product> Products { get; set; }
    }
}
