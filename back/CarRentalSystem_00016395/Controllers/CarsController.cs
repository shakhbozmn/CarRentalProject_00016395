// ### Student: 00016395


using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Models;
using CarRentalSystem_00016395.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CarsController : ControllerBase
{
    private readonly ICar16395Repository _carRepository;
    
    public CarsController(ICar16395Repository carRepository)
    {
        _carRepository = carRepository;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Car_16395>>> GetCars()
    {
        var cars = await _carRepository.GetAllCarsAsync();
        
        if (cars == null)
        {
            return NotFound();
        }
        
        return Ok(cars);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Car_16395>> GetCar(int id)
    {
        var car = await _carRepository.GetCarByIdAsync(id);
        
        if (car == null)
        {
            return NotFound();
        }
        
        return Ok(car);
    }
    
    [HttpPost]
    public async Task<ActionResult<Car_16395>> CreateCar(Car_16395 car)
    {
        await _carRepository.AddCarAsync(car);
        
        return CreatedAtAction("GetCar", new { id = car.Id }, car);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCar(int id, Car_16395 car)
    {
        if (id != car.Id)
        {
            return BadRequest();
        }
        
        await _carRepository.UpdateCarAsync(car);
        
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCar(int id)
    {
        await _carRepository.DeleteCarAsync(id);
        
        return NoContent();
    }
}