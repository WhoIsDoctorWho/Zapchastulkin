namespace Zapchastulkin.Models
{
    public abstract class Entity
    {
        public int Id { get; protected set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
    }
}
