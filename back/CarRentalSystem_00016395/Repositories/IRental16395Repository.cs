// ### Student: 00016395

using CarRentalSystem_00016395.Models;

namespace CarRentalSystem_00016395.Repositories;

public interface IRental16395Repository
{
    Task<IEnumerable<Rental_16395>> GetAllRentalsAsync();
    Task<Rental_16395> GetRentalByIdAsync(int id);
    Task AddRentalAsync(Rental_16395 rental);
    Task UpdateRentalAsync(Rental_16395 rental);
    Task DeleteRentalAsync(int id);
}