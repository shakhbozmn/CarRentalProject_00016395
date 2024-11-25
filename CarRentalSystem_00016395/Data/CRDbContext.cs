/// ### Student: 00016395


using CarRentalSystem_00016395.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Data;

public class CRDbContext : DbContext
{
    public CRDbContext(DbContextOptions<CRDbContext> o) : base(o)
    {}
    
    public DbSet<Car> Cars { get; set; }
    
    public DbSet<Customer> Customers { get; set; }
    
    public DbSet<Rental> Rentals { get; set; }
}