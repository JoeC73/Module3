const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
for (let key in sydney) {
    console.log('key ' + key);
    console.log('value ' + sydney[key] );
}

const norfolk = {
    name: 'Norfolk',
    state: 'Virginia',
    population: 235_089,
    founded: 1682,
    timezone: 'Eastern',
}
for (let key in norfolk) {
    console.log('key ' + key);
    console.log('value ' + norfolk[key])
}