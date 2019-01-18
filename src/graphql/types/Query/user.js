const User = require('../../../models/User')
const { raw } = require('objection')

const userResolver = async (obj, args, context) => {
  const userByID = await User
    .query()
    .where('id', "=", args.id)

  return userByID[0]
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args
      const allUsers = await User.query()
      .modify(function(queryBuilder){
        if(substr) {
          queryBuilder.where(raw('lower("name")'), 'like', '%' + substr.toLowerCase() + '%')
        }
        if(hometown){
          queryBuilder.andWhere('hometown', hometown)
        }
        if(house){
          queryBuilder.andWhere('house', house)
        }
        if(concentration){
          queryBuilder.andWhere('concentration', concentration)
        }
        if(hobbies.length){
          queryBuilder.join('hobbies', 'users.id', '=', 'hobbies.userId')
          queryBuilder.where('hobby', hobbies)
        }
      })
  return allUsers
}

const followsResolver = async (obj, args, context) => {
  const follows = await User
  .query()
  .modify(function(queryBuilder){
    if (args.status) {
      queryBuilder.whereExists(User.relatedQuery("following").where("status",status))
    }
  })
  return follows
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
    follows: followsResolver,
  },
}

module.exports = resolver