db = db.getSiblingDB('TripSample')
db.createCollection('trips')
tripsCollection = db.getCollection("trips")
tripsCollection.remove({})
tripsCollection.insert(
	{
		userId: "114369730898823053427",
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
		userId: "114369730898823053427",
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
		userId: "114369730898823053427",
		name: "Ohio road Trip",
		tripId: 3,
		owner: "akhil",
		start: "Washington",
		end: "Ohio",
		date: "6/30/2023"
	}
)
tripsCollection.insert(
	{
		userId: "113155605386914619679",
		name: "Vancouver road Trip",
		tripId: 4,
		owner: "Colson",
		start: "Richmond",
		end: "Vancouver",
		date: "6/12/2023"
	}
)
tripsCollection.insert(
	{
		userId: "113155605386914619679",
		name: "Hawaii road Trip",
		tripId: 5,
		owner: "Colson",
		start: "Washington",
		end: "Hawaii",
		date: "4/20/2023"
	}
)
db.createCollection('stops')
stopsCollection = db.getCollection("stops")
stopsCollection.remove({})
stopsCollection.insert(
	{
		tripId: 1,
		stops: [
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
			},
			{
				description: "In-N-Out",
				stopId: 3,
				stopType: "Food",
				review: 4,
				address: "6280 Keizer Station Blvd",
			},
			{
				description: "Chipotle",
				stopId: 4,
				stopType: "Food",
				review: 4,
				address: "415 Sacremento St",
			}
		]
	}
)
stopsCollection.insert(
	{
		tripId: 2,
		stops: [
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
				address: "673 Back Alley Way",
			},
			{
				description: "Hell's Kitchen",
				stopId: 3,
				stopType: "Food",
				review: 4,
				address: "985 Vegas Pkwy",
			},
			{
				description: "Shake Shack",
				stopId: 4,
				stopType: "Food",
				review: 4,
				address: "22 Swift Rd",
			},
			{
				description: "Jamba Juice",
				stopId: 5,
				stopType: "Food",
				review: 4,
				address: "67 Raspberry Rd",
			}
		]
	}
)
stopsCollection.insert(
	{
		tripId: 3,
		stops: [
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
				description: "Burger King",
				stopId: 3,
				stopType: "Food",
				review: 1,
				address: "4231 Gotham street",
			}
		]
	}
)
stopsCollection.insert(
	{
		tripId: 4,
		stops: [
			{
				description: "McDonalds",
				stopId: 1,
				stopType: "Food",
				review: 4,
				address: "123 Playplace Rd",
			},
			{
				description: "Sun Sui Wah",
				stopId: 2,
				stopType: "Food",
				review: 5,
				address: "4940 No.3 Rd",
			},
			{
				description: "CRAFT Beer Market",
				stopId: 3,
				stopType: "Food",
				review: 5,
				address: "1795 Beach Ave",
			}
		]
	}
)
stopsCollection.insert(
	{
		tripId: 5,
		stops: [
			{
				description: "Marugame Udon",
				stopId: 1,
				stopType: "Food",
				review: 5,
				address: "2310 Kuhio Ave",
			},
			{
				description: "Ono Seafood",
				stopId: 2,
				stopType: "Food",
				review: 5,
				address: "747 Kapahulu Ave",
			},
			{
				description: "Raising Canes",
				stopId: 3,
				stopType: "Food",
				review: 4,
				address: "2615 S King St",
			}
		]
	}
)