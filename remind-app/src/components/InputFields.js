import { Fragment, useState } from 'react';
import { TextInput, createStyles } from '@mantine/core';
import SubmitButton from '../UI/SubmitButton';
import UserTable from './UserTable';

const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: 7,
    left: theme.spacing.sm,
    pointerEvents: 'none',
    color: floating
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : 'none',
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },

  input: {
    '&::placeholder': {
      transition: 'color 150ms ease',
      color: !floating ? 'transparent' : undefined,
    },
  },
}));

  const InputFields = () => {
    const [focused, setFocused] = useState(false);
    const [name, setName] = useState('');
    const [focused1, setFocused1] = useState(false);
    const [phonenumber, setPhoneNumber] = useState('');
    const [focused2, setFocused2] = useState(false);
    const [bringing, setBringing] = useState('');
    const { classes } = useStyles({ floating: name.trim().length !== 0 || focused });
    const { classes1 } = useStyles({ floating1: phonenumber.trim().length !== 0 || focused1 });
    const { classes2 } = useStyles({ floating2: bringing.trim().length !== 0 || focused2 });

  return (
    <Fragment>
      <TextInput
        label="Name"
        placeholder="Name"
        required
        classNames={classes}
        name={name}
        onChange={(event) => setName(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="Phone Number"
        placeholder="Phone Number"
        required
        classNames={classes1}
        phonenumber={phonenumber}
        onChange={(event) => setPhoneNumber(event.currentTarget.value)}
        onFocus={() => setFocused1(true)}
        onBlur={() => setFocused1(false)}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="Bringing"
        placeholder="888-888-8888"
        required
        classNames={classes2}
        bringing={bringing}
        onChange={(event) => setBringing(event.currentTarget.value)}
        onFocus={() => setFocused2(true)}
        onBlur={() => setFocused2(false)}
        mt="md"
        autoComplete="nope"
      />
      
      <UserTable name={name} phonenumber={phonenumber} bringing={bringing}/>
    </Fragment>
  );
}

export default InputFields;