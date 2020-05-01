using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Zapchastulkin.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Product> Products { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
        public async Task DeleteCategoryAsync(int id)
        {
            Category category = await Categories.FirstOrDefaultAsync(category => category.Id == id);
            if(category != null)
            {
                RemoveCategoryWithUnits(category);
                await SaveChangesAsync();
            }
        }
        public async Task DeleteUnitAsync(int id)
        {
            Unit unit = await Units.FirstOrDefaultAsync(unit => unit.Id == id);
            if(unit != null)
            {
                RemoveUnitWithProducts(unit);
                await SaveChangesAsync();
            }
        }
        public async Task DeleteProductAsync(int id)
        {
            Product product = await Products.FirstOrDefaultAsync(product => product.Id == id);
            if (product != null)
            {
                Products.Remove(product);
                await SaveChangesAsync();
            }
        }
        private void RemoveCategoryWithUnits(Category category)
        {
            foreach (Unit unit in category.Units)
            {
                RemoveUnitWithProducts(unit);                
            }
            Categories.Remove(category);
        }
        private void RemoveUnitWithProducts(Unit unit)
        {            
            foreach (Product product in unit.Products)
            {
                Products.Remove(product);
            }
            Units.Remove(unit);
        }

             
    }
}
