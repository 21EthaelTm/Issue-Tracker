import { Select } from '@radix-ui/themes'
import React from 'react'

const AssignSelect = () => {
  return (
    <Select.Root defaultValue="apple">
	<Select.Trigger placeholder='assignee...'/>
	<Select.Content>
		<Select.Group>
			<Select.Label>Fruits</Select.Label>
			<Select.Item value="orange">Orange</Select.Item>
			<Select.Item value="apple">Apple</Select.Item>
			</Select.Group>
	</Select.Content>
</Select.Root>

  )
}

export default AssignSelect