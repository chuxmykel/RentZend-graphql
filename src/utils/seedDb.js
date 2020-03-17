const createAgents = async models => {
  await models.Agent.create({
    name: 'James Okorocha',
    email: 'james.o@gmail.com',
    phoneNumber: '(123) 456-7899',
    address: 'no. 10 Ojoro Street. Nakupenda',
    zipCode: '101233',
    passport: 'https://randomuser.me/api/portraits/men/75.jpg',
  });
  await models.Agent.create({
    name: 'Mitesh Kelji',
    email: 'm.kelji.@gmail.com',
    phoneNumber: '(098) 765-4321',
    address: 'no.15, Maracana Arena, Andra Pradesh',
    zipCode: '101653',
    passport: 'https://randomuser.me/api/portraits/men/43.jpg',
  });
  await models.Agent.create({
    name: 'Moses Obika',
    email: 'obika.moses.@gmail.com',
    phoneNumber: '(132) 758-9453',
    address: '9278 New road, Kilcoole, waterford',
    zipCode: '93027',
    passport: 'https://randomuser.me/api/portraits/men/28.jpg',
  });
  await models.Agent.create({
    name: 'Ikechukwu Okey',
    email: 'okey.ikechukwu.@gmail.com',
    phoneNumber: '(234) 928-4253',
    address: '53 Haven lane, Lagos Island',
    zipCode: '101254',
    passport: 'https://randomuser.me/api/portraits/men/22.jpg',
  });
  await models.Agent.create({
    name: 'Flavour Umeh',
    email: 'flavour.baby@gmail.com',
    phoneNumber: '(928) 674-4390',
    address: 'Rwang Pam Stadium, Jos, Plateau State',
    zipCode: '101254',
    passport: 'https://randomuser.me/api/portraits/women/24.jpg',
  });
  await models.Agent.create({
    name: 'Kelechi Ngwobia',
    email: 'kcmykairl@gmail.com',
    phoneNumber: '(287) 878-2833',
    address: 'Old Legislative Qtrs. Angwan Rukuba, Plateau State',
    zipCode: '101254',
    passport: 'https://randomuser.me/api/portraits/women/75.jpg',
  });
};

export default createAgents;
