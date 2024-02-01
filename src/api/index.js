// eslint-disable-next-line no-unused-vars

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */

// TODO: All API related logic should be made inside this function.

export default async function getData() {
  const responsgetData = await fetch('api/vehicle_xj.json');
  const datagetData = await responsgetData.json();
  return datagetData;
}

export async function getDataVehicleFpace() {
  const responseDataVehicleFpace = await fetch('api/vehicle_fpace.json');
  const dataDataVehicleFpace = await responseDataVehicleFpace.json();
  return dataDataVehicleFpace;
}
export async function getDataVehicleFtype() {
  const responseDataVehicleFtype = await fetch('api/vehicle_ftype.json');
  const dataDataVehicleFtype = await responseDataVehicleFtype.json();
  return dataDataVehicleFtype;
}

export async function getDataVehicleIpace() {
  const responseDataVehicleIpace = await fetch('api/vehicle_ipace.json');
  const dataDataVehicleIpace = await responseDataVehicleIpace.json();
  return dataDataVehicleIpace;
}
export async function getDataVehicleXe() {
  const responsDataVehicleXe = await fetch('api/vehicle_xe.json');
  const dataDataVehicleXe = await responsDataVehicleXe.json();
  return dataDataVehicleXe;
}
export async function getAllVehicleData() {
  const responseAllVehicleData = await fetch('api/vehicles.json');
  const dataAllVehicleData = await responseAllVehicleData.json();
  return dataAllVehicleData;
}
