class ServiceRequestData {
  constructor () {
    this.consumers = {}
    this.serviceProfessional = {}
    this.buildInitialDataSet()
  }
  buildInitialDataSet () {
    this.consumers = [
      {
        email: 'jsmith@email.com',
        firstName: 'John',
        id: '1',
        lastName: 'Smith',
        phone: '(303) 555-1234',
        state: 'CO',
        street: '1 Street Ave.',
        zipCode: '80123'
      },
      {
        email: 'jDoe@email.com',
        firstName: 'Jane',
        id: '2',
        lastName: 'Doe',
        phone: '(303) 555-1234',
        state: 'CA',
        street: '2 Street Ave.',
        zipCode: '80234'
      },
      {
        email: 'bAnderson@email.com',
        firstName: 'Bob',
        id: '3',
        lastName: 'Anderson',
        phone: '(303) 555-1234',
        state: 'DE',
        street: '3 Street Ave.',
        zipCode: '80345'
      },
      {
        email: 'bJones@email.com',
        firstName: 'Barb',
        id: '4',
        lastName: 'Jones',
        phone: '(303) 555-1234',
        state: 'WA',
        street: '4 Street Ave.',
        zipCode: '80456'
      }
    ]
    this.serviceProfesional = {
      affiliate: 'Thor',
      callUniqueId: '123123123',
      numberCalled: '(555) 555-5556',
      serverId: 'Infinity',
      spId: '12345',
      spLocation: 'Hello, WO',
      spName: 'ABC Company',
      spPhone: '(555) 555-5555',
      spRating: '4.8',
      spRatings: '10'
    }
  }
  getConsumersList () {
    return this.consumers
  }
  getServiceProfessional () {
    return this.serviceProfesional
  }
}
export default ServiceRequestData
