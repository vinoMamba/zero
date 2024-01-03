import { it } from 'vitest'
import { listToTree, treeToList } from '../src'

it('treeToList', (t) => {
  const treeData = [{
    id: 1,
    value: 1,
    children: [
      {
        id: 2,
        value: 2,
      },
    ],
  }]
  const result = [
    {
      id: 1,
      value: 1,
      children: [
        {
          id: 2,
          value: 2,
        },
      ],
    },
    {
      id: 2,
      value: 2,
    },
  ]
  treeToList(treeData)
  t.expect(treeToList(treeData)).toEqual(result)
})

it('listToTree', (t) => {
  const list = [
    {
      id: 1,
      parentId: 0,
      children: [],
    },
    {
      id: 2,
      parentId: 1,
      children: [],
    },
    {
      id: 3,
      parentId: 1,
      children: [],
    },
    {
      id: 4,
      parentId: 2,
      children: [],
    },
  ]
  const tree = listToTree(list)
  const result = [
    {
      id: 1,
      parentId: 0,
      children: [
        {
          id: 2,
          parentId: 1,
          children: [
            {
              id: 4,
              parentId: 2,
              children: [],
            },
          ],
        },
        {
          id: 3,
          parentId: 1,
          children: [],
        },
      ],
    },
  ]
  t.expect(tree).toEqual(result)
})
