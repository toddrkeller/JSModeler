JSM.Coord2D = function (x, y)
{
	this.x = JSM.ValueOrDefault (x, 0.0);
	this.y = JSM.ValueOrDefault (y, 0.0);
};

JSM.Coord2D.prototype.Set = function (x, y)
{
	this.x = JSM.ValueOrDefault (x, 0.0);
	this.y = JSM.ValueOrDefault (y, 0.0);
};

JSM.Coord2D.prototype.ToString = function ()
{
	return ('(' + this.x + ', ' + this.y + ')');
};

JSM.Coord2D.prototype.Clone = function ()
{
	return new JSM.Coord2D (this.x, this.y);
};

JSM.PolarCoord = function (radius, angle)
{
	this.radius = JSM.ValueOrDefault (radius, 1.0);
	this.angle = JSM.ValueOrDefault (angle, 0.0);
};

JSM.PolarCoord.prototype.Set = function (radius, angle)
{
	this.radius = JSM.ValueOrDefault (radius, 1.0);
	this.angle = JSM.ValueOrDefault (angle, 0.0);
};

JSM.PolarCoord.prototype.ToString = function ()
{
	return ('(' + this.radius + ', ' + this.angle + ')');
};

JSM.PolarCoord.prototype.Clone = function ()
{
	return new JSM.PolarCoord (this.radius, this.angle);
};

JSM.Coord = function (x, y, z)
{
	this.x = JSM.ValueOrDefault (x, 0.0);
	this.y = JSM.ValueOrDefault (y, 0.0);
	this.z = JSM.ValueOrDefault (z, 0.0);
};

JSM.Coord.prototype.Set = function (x, y, z)
{
	this.x = JSM.ValueOrDefault (x, 0.0);
	this.y = JSM.ValueOrDefault (y, 0.0);
	this.z = JSM.ValueOrDefault (z, 0.0);
};

JSM.Coord.prototype.ToString = function ()
{
	return ('(' + this.x + ', ' + this.y + ', ' + this.z + ')');
};

JSM.Coord.prototype.Clone = function ()
{
	return new JSM.Coord (this.x, this.y, this.z);
};

JSM.SphericalCoord = function (radius, theta, phi)
{
	this.radius = JSM.ValueOrDefault (radius, 0.0);
	this.theta = JSM.ValueOrDefault (theta, 0.0);
	this.phi = JSM.ValueOrDefault (phi, 0.0);
};

JSM.SphericalCoord.prototype.Set = function (radius, theta, phi)
{
	this.radius = JSM.ValueOrDefault (radius, 0.0);
	this.theta = JSM.ValueOrDefault (theta, 0.0);
	this.phi = JSM.ValueOrDefault (phi, 0.0);
};

JSM.SphericalCoord.prototype.ToString = function ()
{
	return ('(' + this.radius + ', ' + this.theta + ', ' + this.phi + ')');
};

JSM.SphericalCoord.prototype.Clone = function ()
{
	return new JSM.SphericalCoord (this.radius, this.theta, this.phi);
};

JSM.Vector2D = JSM.Coord2D;
JSM.Vector = JSM.Coord;
