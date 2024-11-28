// ### Student: 00016395

using CarRentalSystem_00016395.Models;

namespace CarRentalSystem_00016395.Repositories;

public interface ICar16395Repository
{
    Task<IEnumerable<Car_16395>> GetAllCarsAsync();
    Task<Car_16395> GetCarByIdAsync(int id);
    Task AddCarAsync(Car_16395 car);
    Task UpdateCarAsync(Car_16395 car);
    Task DeleteCarAsync(int id);
}