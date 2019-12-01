import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

class Messenger extends React.Component {

    render() {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Grid item >
                    <Box>
                    <iframe
                        title="3BIT Dev Bot"
                        allow="microphone;"
                        width="350"
                        height="500"
                        src="https://console.dialogflow.com/api-client/demo/embedded/fd0c2ee8-f37e-40c4-a92f-6bd3cd63dc62">
                    </iframe>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Messenger