using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Repositories;
using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            // Allow specific origins (Angular frontend)
            policy.WithOrigins("http://localhost:4200") // Frontend URL
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register services and repositories
builder.Services.AddScoped<ICar16395Repository, Car16395Repository>();
builder.Services.AddScoped<IRental16395Repository, Rental16395Repository>();
builder.Services.AddControllers();

// Configure database context
builder.Services.AddDbContext<CRDbContext_16395>(o =>
    o.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnection")));

var app = builder.Build();

// Enable Swagger in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Enable CORS
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

// Map controllers
app.MapControllers();

app.Run();