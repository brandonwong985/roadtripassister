db = db.getSiblingDB('TripSample')
db.createCollection('trips')
tripsCollection = db.getCollection("trips")
tripsCollection.remove({})
tripsCollection.insert(
{
	  name: "California road Trip",
	  tripId: 1,
	  owner: "akhil",
	  start: "Seattle",
	  end: "San Francisco",
	  date: "7/18/2023"
}
)
tripsCollection.insert(
{
	  name: "Seattle road Trip",
	  tripId: 2,
	  owner: "akhil",
	  start: "San Francisco",
	  end: "Seattle",
	  date: "7/20/2023"
}
)
tripsCollection.insert(
{
	  name: "Ohio road Trip",
	  tripId: 3,
	  owner: "akhil",
	  start: "Washington",
	  end: "Ohio",
	  date: "4/20/2023"
}
)
db.createCollection('stops')
stopsCollection = db.getCollection("stops")
stopsCollection.remove({})
stopsCollection.insert(
{
	tripId : 1,
	stops : [
	 {
	  description: "Indian Palace",
      stopId: 1,
      stopType: "Food",
      review: 4,
      address: "123 Main Street",
	 },
	 {
	  description: "Mexican Palace",
      stopId: 2,
      stopType: "Food",
      review: 5,
      address: "456 Main Street",
	 }
	]
}
)
stopsCollection.insert(
{
	tripId : 2,
	stops : [
	 {
	  description: "Taco Bell",
      stopId: 1,
      stopType: "Food",
      review: 5,
      address: "235 Side Street",
	 },
	 {
	  description: "Pizza Hut",
      stopId: 2,
      stopType: "Food",
      review: 2,
      address: "673 Back Alley way",
	 }
	]	
}
)
stopsCollection.insert(
{
	tripId : 3,
	stops : [
	 {
	  description: "Panda Express",
      stopId: 1,
      stopType: "Food",
      review: 5,
      address: "856 Lincoln Park Street",
	 },
	 {
	  description: "Chick fil A",
      stopId: 2,
      stopType: "Food",
      review: 5,
      address: "Churchhill ln",
	 },
	 {
	  description: "BurgerKing",
      stopId: 3,
      stopType: "Food",
      review: 1,
      address: "4231 Gotham street",
	 }
	]	
}
)