function AliceDBTable(tableName) {
    console.log(`Created new Table [${tableName}]`)
    const records = []
    const index = []

    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    const createUUID = () => {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    const find = uuid => records[index[uuid]]

    const getAll = () => records

    const addAsync = record => {
        const uuid = createUUID()
        index[uuid] = records.length

        const row = {
            ...record,
            uuid
        }
        records.push(row)
        return row
    }

    const add = record => {
       return new Promise((resolve, reject) => {
           try {
                const row = addAsync(record)
                resolve(row)
            } catch (error) {
                reject(`error on add new row ${tableName}`)
            }
        })
    }

    const remove = uuid => delete records[index[uuid]]

    const update = (uuid, record) => records[index[uuid]] = record

    return {
        getAll,
        find,
        add,
        addAsync,
        remove,
        update,
    }
  }

  exports.default = AliceDBTable