namespace Zapchastulkin.Models
{
    public class Product : Entity
    {
        public decimal Price { get; set; }
        public string Brand { get; set; }
        public string Vendor { get; set; }
        public string Description { get; set; }        
        public int UnitId { get; set; }
    }
}
