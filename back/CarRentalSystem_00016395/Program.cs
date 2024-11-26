// Car Rental Project Backend
// # This app was created for the Web Applications module as a coursework portfolio.
// ### Student: 00016395

using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICar16395Repository, Car16395Repository>();
builder.Services.AddControllers();
builder.Services.AddDbContext<CRDbContext_16395>(o =>
    o.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnection")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
