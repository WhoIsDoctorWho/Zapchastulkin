using System.Collections.Generic;

namespace Zapchastulkin.Models
{
    public class Category : Entity
    {
        public List<Unit> Units { get; set; }
    }
}
