import React from 'react'
import '../../styles/components/schedule.scss'

function Schedule() {
    const mockSeason = 2023;
    const mockGames = [
        {
            id: 1,
            where: 'Home',
            when: '2023-01-01',
            homeTeam: 'Team 1',
            awayTeam: 'Team 2',
            result: '1-0'
        },
        {
            id: 2,
            where: 'Away',
            when: '2023-01-01',
            homeTeam: 'Team 3',
            awayTeam: 'Team 4',
            result: '1-0'
        },
        {
            id: 3,
            where: 'Home',
            when: '2023-01-01',
            homeTeam: 'Team 5',
            awayTeam: 'Team 6',
            result: '1-0'
        },
    ]
  return (
    <div className="schedule-wrapper">
        <div className="schedule-header">
            <h1>Schedule</h1>
            <h2 className='highlight-dark'>Seasson {mockSeason}</h2>
        </div>
        <div className="schedule-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h3>Where</h3>
                        </th>
                        <th>
                            <h3>When</h3>
                        </th>
                        <th>
                            <h3>Home Team</h3>
                        </th>
                        <th>
                            <h3>Away Team</h3>
                        </th>
                        <th>
                            <h3>Result</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mockGames.map(game => {
                        return(
                            <tr key={game.id}>
                                <td>{game.where}</td>
                                <td>{game.when}</td>
                                <td>{game.homeTeam}</td>
                                <td>{game.awayTeam}</td>
                                <td>{game.result}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="schedule-footer">
            <h2>Overall Scores</h2>
            <div className="overall-scores">
                <h3>win: <span className="highlight">999</span></h3>
                <h3>draw: <span className="highlight">999</span></h3>
                <h3>lose: <span className="highlight">999</span></h3>
                <h3>points: <span className="highlight">999</span></h3>
                    
            </div>
        </div>
    </div>
  )
}

export default Schedule;