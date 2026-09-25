export default function ISRDemo(props) {
   return (
	   <>
	   <div>
		</div>
		  <main>
			<h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center" }}>Incremental Static Regeneration</h1>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (Reload after 10 seconds)
			</h2>
			<h2 style={{ fontSize: "25px", margin: "20px", textAlign: "center" }}>
			  (revalidate interval: 10 seconds)
			</h2>
			<h2 style={{ fontSize: "70px", margin: "20px", textAlign: "center" }}>
			  <div>{props.thought}</div>
			</h2>
			<h2 style={{ fontSize: "40px", margin: "10%", textAlign: "center" }}>
				<a href="/">
					Home
				</a>
			</h2>
		  </main>
	   </>
	);
}

export async function getStaticProps() {
	const ThoughtList = ['"You have to dream before your dreams can come true." – A.P.J Abdul Kalam', 
						'"Life should be great rather than long." – B.R. Ambedkar',
						'“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela',
						'“Every champion was once a contender that didn’t give up.” ― Gabby Douglas',
			     			'“A little progress each day adds up to big results.” – Satya Nani',
			     			'“Every accomplishment starts with the decision to try.” – Gail Devers',
			     			'“If you can dream it, you can do it.” - Walt Disney',
			     			'“All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.” ― A.P.J. Abdul Kalam',
			     			'“A person who never made a mistake never tried anything new.” — Albert Einstein',
						'“Nothing will work unless you do.” ― Maya Angelou'];
	let index = Math.ceil(Math.random() * 10) % 10;
	return {
		props: {
		  thought: ThoughtList[index],
		},
		revalidate: 10, // In seconds
	}
}

// SIG // Begin signature block
// SIG // MIIo1gYJKoZIhvcNAQcCoIIoxzCCKMMCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // bifdPqRH+V3UKBdVv/7YOYr0oFKSDmf6XFAkDf5u342g
// SIG // gg3DMIIGrTCCBJWgAwIBAgITMwAAANMCiNhpvd8CCQAA
// SIG // AAAA0zANBgkqhkiG9w0BAQwFADBiMQswCQYDVQQGEwJV
// SIG // UzEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MTMwMQYDVQQDEypBenVyZSBSU0EgUHVibGljIFNlcnZp
// SIG // Y2VzIENvZGUgU2lnbmluZyBQQ0EwHhcNMjYwMzA1MTkw
// SIG // NjE5WhcNMjcwMzAzMTkwNjE5WjCBgjELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEsMCoGA1UEAxMjQXp1cmUgUHVibGljIFNl
// SIG // cnZpY2VzIFJTQSBDb2RlIFNpZ24wggGiMA0GCSqGSIb3
// SIG // DQEBAQUAA4IBjwAwggGKAoIBgQDJrDsZxGHNBYj5RPkR
// SIG // yGEIGZlcCQkqE7SdGa6c2FPAMGu1JLqHur8qNWjR5swe
// SIG // kMMn0WSz2+QE0c848wHvqVVLpWV+Un3Q01Dnyzjifae4
// SIG // h+kzhQTUIhX2rKQbGHdqBe7LXyCgkfDrTNLXsI1xAXAw
// SIG // A42Ar+PpVd1ktqLSsM6pwqrM/FFfEizl9h5gtrEIZODp
// SIG // +jo9vESxKvHGp/Ifca7e/IluDeJffP4ME/fFtUzUCLH/
// SIG // IweugiUcsaTmewSny4odYLtmZK/zpBuPjGTLpUnn4HMy
// SIG // WXLUSOFlgvFrLKCPZxbNxXxBo5EUquzrFbpg9NmQVipJ
// SIG // QsKDSKNHluTwNicItFpZpiPMc7Y2LG11dNAil3yJEBLF
// SIG // MQ/5RqQptcWmgSKoG8Tx7x+RCYQj4Sjl2yJt+4OykVn9
// SIG // /kQ5wo6v6TmIHHZsKdmgIkMCKBuIRcB2FaGwLY+UGMP1
// SIG // xmiwIaekgjUgVwXX8Kv/2SYI9XXrjyUME4NLj0JTBIO7
// SIG // YX201gYYOL8CAwEAAaOCAbkwggG1MA4GA1UdDwEB/wQE
// SIG // AwIHgDAfBgNVHSUEGDAWBggrBgEFBQcDAwYKKwYBBAGC
// SIG // N1sBATAdBgNVHQ4EFgQU6DIfaqBAAm33/QFJGYifZUeQ
// SIG // B3AwRQYDVR0RBD4wPKQ6MDgxHjAcBgNVBAsTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEWMBQGA1UEBRMNNDY5OTgx
// SIG // KzUwNzE4MTAfBgNVHSMEGDAWgBTxL7qRFnzefVInMfV6
// SIG // +9VYWWk6PTBvBgNVHR8EaDBmMGSgYqBghl5odHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9BenVy
// SIG // ZSUyMFJTQSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29k
// SIG // ZSUyMFNpZ25pbmclMjBQQ0EuY3JsMHwGCCsGAQUFBwEB
// SIG // BHAwbjBsBggrBgEFBQcwAoZgaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jZXJ0cy9BenVyZSUyMFJT
// SIG // QSUyMFB1YmxpYyUyMFNlcnZpY2VzJTIwQ29kZSUyMFNp
// SIG // Z25pbmclMjBQQ0EuY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQEMBQADggIBAKJEWoxuo4PDUOPrpeqZZBdc
// SIG // EBjIoYQZjSvEIMTd0fcf89rWN/fr6cbAs3fZtR1LQ2kR
// SIG // Wo2mYixmAQpm6ijAYu3Qg+/NIHofviOVCDqHmaQGEiwi
// SIG // oBsb7Et9V7B9rqsksJslTyCJUJYuIXaKv37suPC7cFpX
// SIG // aaWaNLn0juz1sPKdklvTO23fwcahgRO9nqd9gTi9j6dw
// SIG // /nEJURWo32dl+rxdylnuRd6RHpkJKdlPVXRrr/ZL8sby
// SIG // akoCUN4zNVivUMLmUspYRJIV2TpkZonQnrmTm6TpXGVg
// SIG // Cjj56duTzVa/GRAKLVBHNm8je6esjgoswv6eHmYkmgJR
// SIG // jvZ+eHNloLnXfqByg3CxJ0Gd+nja5RTavYplIc9zfOgq
// SIG // Ng5e6NW8E0Q/AI115WfpM+ncWenWqdPs1YLinyUdRDxi
// SIG // DTmhYTyN1p3FojGtyM+mrQVIvC2l8zQr/LNCTvz/dj2h
// SIG // WqsF/7SDnK4wE812YAp6pPfgtr6BfVD0LMJu+s6f2PXe
// SIG // oLskA4Ac2PoJz5N7FmeY7Wn5shZBf4hOqCJssd5ZBpUb
// SIG // tGYh3iCnQSJP9EokoxVxe7D5HmkqTRNnXqIDQ5zW6bL3
// SIG // SDCYFEG5EWtqV9Ytd0Mjplx/s5+w1TnYbXIKbPzi4Hnb
// SIG // 3Xr0m8YnMuVyhmxGyHZ2CjMpQclgocs2QNsOyr7evLGD
// SIG // MIIHDjCCBPagAwIBAgITMwAAAAKyxJOIeFns0wAAAAAA
// SIG // AjANBgkqhkiG9w0BAQwFADBbMQswCQYDVQQGEwJVUzEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSww
// SIG // KgYDVQQDEyNNaWNyb3NvZnQgUlNBIFNlcnZpY2VzIFJv
// SIG // b3QgQ0EgMjAyMTAeFw0yMTA5MDIxNzQxMTlaFw0zNjA5
// SIG // MDIxNzUxMTlaMGIxCzAJBgNVBAYTAlVTMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMzAxBgNVBAMT
// SIG // KkF6dXJlIFJTQSBQdWJsaWMgU2VydmljZXMgQ29kZSBT
// SIG // aWduaW5nIFBDQTCCAiIwDQYJKoZIhvcNAQEBBQADggIP
// SIG // ADCCAgoCggIBAKXd/Sy91nFgseVJOFgeRhVxrcahyp1Y
// SIG // GSN0FpOEgEREVb3ND/QgI7I0yd7XG6OE8Vomr5FMxvK8
// SIG // TvJ4Lc6LP9BDz2GSa1M0LlzHKX757/24C0ZndzccA1qQ
// SIG // i00+BmmOr4plmxRzTFv4Phdw8yBPF9GDvClqV8ASvvbi
// SIG // tfjaD7dVPOFLb7N7fvt/qWogGN5eis0FXCqVJdmPZZaX
// SIG // 2h4iG0otsAhfq8yvSlJ0YwO4i5GDeLQwTsMN1Rf2UAHQ
// SIG // KCUYkFsLSQ0mqbaRbDZhB+2pFL/q/c2a6hlHLnapYyfw
// SIG // lNFXkDhwAFWEzfwFHER2oR42UayfN9tsO/p2tWk33Crn
// SIG // HdndJDrIZ6oQ3D+Ngol/TR8BAgXCIM6se6YlLDTsxRwh
// SIG // 9QUDq7KVhKy58HGKJUqwgIW0E7cvlzUl0Hft/ebhALZy
// SIG // FDkhof9C5Cq4c/486XLjQq0nbuKsFNhQU0yvABR3eohw
// SIG // 63Kps66Uma48oE0JmqOxmzrPvrITYcsnByKleiHn+4yq
// SIG // +Ts/KrtqkQwQcuikMPrZwXCtsYkxMUyUn8gr8oew22WD
// SIG // eIQECAM1Cz9TcdJadsrToKqXQa2bAn/AABAYyogPPONf
// SIG // GvojTI3DlYD42etMa/gPeZJavX+z7x8d/4eYBnJ9WFSi
// SIG // 9q0v+vLOGc3fyM2KQtq5eVbHX5rVyWc6bJ35AgMBAAGj
// SIG // ggHCMIIBvjAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4E
// SIG // FgQU8S+6kRZ83n1SJzH1evvVWFlpOj0wVAYDVR0gBE0w
// SIG // SzBJBgRVHSAAMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBv
// SIG // c2l0b3J5Lmh0bTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBi
// SIG // AEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB
// SIG // /zAfBgNVHSMEGDAWgBQODLFkab0tsdVrJqZH6lZOgMPt
// SIG // ijBmBgNVHR8EXzBdMFugWaBXhlVodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQl
// SIG // MjBSU0ElMjBTZXJ2aWNlcyUyMFJvb3QlMjBDQSUyMDIw
// SIG // MjEuY3JsMHMGCCsGAQUFBwEBBGcwZTBjBggrBgEFBQcw
// SIG // AoZXaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNyb3NvZnQlMjBSU0ElMjBTZXJ2aWNl
// SIG // cyUyMFJvb3QlMjBDQSUyMDIwMjEuY3J0MA0GCSqGSIb3
// SIG // DQEBDAUAA4ICAQBin7PMBnXjnIJ0x++LnudLDWWnZ8dZ
// SIG // mJ14DuZfUss/doUThLAM4crrHaTbJoulUUELNd2AnOpX
// SIG // /Z4tenUMT3sjYIdPYyJfIYWPRqfI6Nbz+JVK7RRvn2nl
// SIG // 5EEMIuRE6UKS9ZGBbf02a7sb04E/7BN/NhhrmtS/tVFj
// SIG // fRrrVh9zXku45rqWuCwUTzg3EqxKQ8OGbtjBQtq/Syb/
// SIG // clm5BHsoh3XhMnb9VLv3G1duNf90FL5/o88XZ4L18nx1
// SIG // lfky2nllY4HIA8PK8AarqAW4iKSTA3EGqn8s/47WtQKT
// SIG // +qED2YbZXVOYL+L7vQDCnFbwhgAx6ucuMz7Ae1rqibg3
// SIG // AjsC7U5M3oA/vqAHDKDA3mdM5D6L/ZEdQgaG20HhUOSQ
// SIG // +CiQD3TyHSiVCfVMuTv83IiKCni3LW/23tHC2tbN57rl
// SIG // hMcoyjIi+IVd7j7s41MFBaDwJrmfXn/YM+lR/5QqvO7z
// SIG // WAbbr/XU531v3jr/jBilmrqt6U/b7y8TXyA9nYxV9iSM
// SIG // FmcbyIi2xgdcAHhxnpXcvcvyFWET6YiJiyeSJZwwJv8g
// SIG // wXiBF+Zh0IHArl6KVsbAdsATuP1TCEBpPynXZmkviIEW
// SIG // Ptnv315ZjTC7nPoOpSnOVaO7wZztrOefZunI5fBxw7mG
// SIG // 1oyoRnADZawiFsVo9J/cDu15ErRCfDQRhwSiBTGCGmsw
// SIG // ghpnAgEBMHkwYjELMAkGA1UEBhMCVVMxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEzMDEGA1UEAxMq
// SIG // QXp1cmUgUlNBIFB1YmxpYyBTZXJ2aWNlcyBDb2RlIFNp
// SIG // Z25pbmcgUENBAhMzAAAA0wKI2Gm93wIJAAAAAADTMA0G
// SIG // CWCGSAFlAwQCAQUAoIGQMBkGCSqGSIb3DQEJAzEMBgor
// SIG // BgEEAYI3AgEEMC8GCSqGSIb3DQEJBDEiBCABDVM22ETo
// SIG // h7EoNDtV8sE/LZRTozC6hoEudryDugIBtzBCBgorBgEE
// SIG // AYI3AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHSh
// SIG // GoAYaHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqG
// SIG // SIb3DQEBAQUABIIBgArLr0PnmWfNJEibhW4mQqWHBX7v
// SIG // q2UJ0XqHDKj236fTkSINkazDfn13VYBharXYMgL6f6Su
// SIG // 7wqDbidxGvB2NAZZiO0UfQIv0V9feiQTotfOIywojh5f
// SIG // JEN5m3OGGx3YAH0CaoIivS0zpehg8mT4D/99MFcyrn5g
// SIG // 5cUCDGKuQRCxYXdwk/ivHL5xmePCKiQQINmj0PUaQ5I9
// SIG // 2wrff7cVg3Xw2ZOyeDamow1cviw+L/U3FizssIMEzaW7
// SIG // ZrbASHsY21cW/pYNyJkHFbF/s6TLbJGzxg5bPTjQvACl
// SIG // TWHIYlVJ2gB3AeYaXlNX1hJZV9r7P67+OzVKlqh1+Rr2
// SIG // tcLcUv1eBvy/+qVKYkizblc3YWqdXqlL+rWYlvdt514g
// SIG // PXRnfmckjlGZxnrUOYlko91mbOegFwOZyJVM+Q9fV9fm
// SIG // /aZmx15ucEmob3JIF8aDsLZRTExgJb5dD0iwzLE8r/9A
// SIG // WhczjkQd+LMjibu7F0buGzUxlz9o39k3b0Nu693C3SsG
// SIG // 5aGCF7AwghesBgorBgEEAYI3AwMBMYIXnDCCF5gGCSqG
// SIG // SIb3DQEHAqCCF4kwgheFAgEDMQ8wDQYJYIZIAWUDBAIB
// SIG // BQAwggFaBgsqhkiG9w0BCRABBKCCAUkEggFFMIIBQQIB
// SIG // AQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCCN
// SIG // GprO27U0xpnR8T4cWktNF5BpH64+qMLLbzPi/Roc1wIG
// SIG // aq7tbzvGGBMyMDI2MDkyMTA4MDMzNC4zNzJaMASAAgH0
// SIG // oIHZpIHWMIHTMQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYD
// SIG // VQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVyYXRpb25z
// SIG // IExpbWl0ZWQxJzAlBgNVBAsTHm5TaGllbGQgVFNTIEVT
// SIG // Tjo1OTFBLTA1RTAtRDk0NzElMCMGA1UEAxMcTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgU2VydmljZaCCEf4wggcoMIIF
// SIG // EKADAgECAhMzAAACFI3NI0TuBt9yAAEAAAIUMA0GCSqG
// SIG // SIb3DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMB4XDTI1MDgxNDE4NDgxOFoXDTI2MTExMzE4NDgx
// SIG // OFowgdMxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsT
// SIG // JE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGlt
// SIG // aXRlZDEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOjU5
// SIG // MUEtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNlMIICIjANBgkqhkiG9w0B
// SIG // AQEFAAOCAg8AMIICCgKCAgEAyU+nWgCUyvfyGP1zTFkL
// SIG // kdgOutXcVteP/0CeXfrF/66chKl4/MZDCQ6E8Ur4kqgC
// SIG // xQvef7Lg1gfso1EWWKG6vix1VxtvO1kPGK4PZKmOeoeL
// SIG // 68F6+Mw2ERPy4BL2vJKf6Lo5Z7X0xkRjtcvfM9T0HDgf
// SIG // HUW6z1CbgQiqrExs2NH27rWpUkyTYrMG6TXy39+GdMOT
// SIG // gXyUDiRGVHAy3EqYNw3zSWusn0zedl6a/1DbnXIcvn9F
// SIG // aHzd/96EPNBOCd2vOpS0Ck7kgkjVxwOptsWa8I+m+DA4
// SIG // 3cwlErPaId84GbdGzo3VoO7YhCmQIoRab0d8or5Pmyg+
// SIG // VMl8jeoN9SeUxVZpBI/cQ4TXXKlLDkfbzzSQriViQGJG
// SIG // JLtKS3DTVNuBqpjXLdu2p2Yq9ODPqZCoiNBh4CB6X2iL
// SIG // YUSO8tmbUVLMMEegbvHSLXQR88QNICjFoBBDCDydoTo9
// SIG // /TNkq80mO77wDM04tPdvbMmxT01GTod60JJxUGmMTgse
// SIG // ghdBGjkN+D6GsUpY7ta7hP9PzLrs+Alxu46XT217bBn6
// SIG // EwJsAYAc9C28mKRUcoIZWQRb+McoZaSu2EcSzuIlAaNI
// SIG // QNtGlz2PF3foSeGmc/V7gCGs8AHkiKwXzJSPftnsH8O/
// SIG // R3pJw2D/2hHE3JzxH2SrLX1FdI7Drw145PkL0hbFL6MV
// SIG // CCkCAwEAAaOCAUkwggFFMB0GA1UdDgQWBBTbX/bs1cSp
// SIG // yTYnYuf/Mt9CPNhwGzAfBgNVHSMEGDAWgBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5o
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Ny
// SIG // bC9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIw
// SIG // MjAxMCgxKS5jcmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsG
// SIG // AQUFBzAChlBodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY3Jvc29mdCUyMFRpbWUtU3Rh
// SIG // bXAlMjBQQ0ElMjAyMDEwKDEpLmNydDAMBgNVHRMBAf8E
// SIG // AjAAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMA4GA1Ud
// SIG // DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAgEAP3xp
// SIG // 9D4Gu0SH9B+1JH0hswFquINaTT+RjpfEr8UmUOeDl4U5
// SIG // uV+i28/eSYXMxgem3yBZywYDyvf4qMXUvbDcllNqRyL2
// SIG // Rv8jSu8wclt/VS1+c5cVCJfM+WHvkUr+dCfUlOy9n4ex
// SIG // CPX1L6uWwFH5eoFfqPEp3Fw30irMN2SonHBK3mB8vDj3
// SIG // D80oJKqe2tatO38yMTiREdC2HD7eVIUWL7d54UtoYxzw
// SIG // kJN1t7gEEGosgBpdmwKVYYDO1USWSNmZELglYA4LoVoG
// SIG // DuWbN7mD8VozYBsfkZarOyrJYlF/UCDZLB8XaLfrMfMy
// SIG // ZTMCOuEuPD4zj8jy/Jt40clrIW04cvLhkhkydBzcrmC2
// SIG // HxeE36gJsh+jzmivS9YvyiPhLkom1FP0DIFr4VlqyXHK
// SIG // agrtnqSF8QyEpqtQS7wS7ZzZF0eZe0fsYD0J1RarbVuD
// SIG // xmWsq45n1vjRdontuGUdmrG2OGeKd8AtiNghfnabVBbg
// SIG // pYgcx/eLyW/n40eTbKIlsm0cseyuWvYFyOqQXjoWtL4/
// SIG // sUHxlWIsrjnNarNr+POkL8C1jGBCJuvm0UYgjhIaL+XB
// SIG // XavrbOtX9mrZ3y8GQDxWXn3mhqM21ZcGk83xSRqB9ecf
// SIG // GYNRG6g65v635gSzUmBKZWWcDNzwAoxsgEjTFXz6ahfy
// SIG // rBLqshrjJXPKfO+9Ar8wggdxMIIFWaADAgECAhMzAAAA
// SIG // FcXna54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGI
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkg
// SIG // MjAxMDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMy
// SIG // MjVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGm
// SIG // TOe0ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YB
// SIG // f2xK4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMM
// SIG // tY0Tz3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTI
// SIG // cVxRMTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+
// SIG // NSZk2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5T
// SIG // z9bshVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi9
// SIG // 47SHJMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uD
// SIG // RedGbsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tn
// SIG // YN74kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/Nme
// SIG // Rd+2ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03
// SIG // dJQcNIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5
// SIG // TI4CvEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy
// SIG // 16cg8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkL
// SIG // iWHzNgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXps
// SIG // xREdcu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqP
// SIG // nhZyacaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsG
// SIG // AQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqn
// SIG // Uv5kxJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVd
// SIG // AF5iXYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsG
// SIG // AQQBgjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVw
// SIG // b3NpdG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEs
// SIG // H2cBMSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfC
// SIG // cTY/2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2Y
// SIG // urYeeNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/
// SIG // SHUB2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRW
// SIG // qveVtihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wX
// SIG // sFSFQrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixr
// SIG // e24/LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoy
// SIG // GtmW9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8
// SIG // x1RtnWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk
// SIG // 2XPXfx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pF
// SIG // EUep8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq7
// SIG // 7EFmPWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGC
// SIG // onsXHRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1Zyvg
// SIG // DbjmjJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7
// SIG // vzhwRNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0
// SIG // HVUzWLOhcGbyoYIDWTCCAkECAQEwggEBoYHZpIHWMIHT
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNy
// SIG // b3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQx
// SIG // JzAlBgNVBAsTHm5TaGllbGQgVFNTIEVTTjo1OTFBLTA1
// SIG // RTAtRDk0NzElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgU2VydmljZaIjCgEBMAcGBSsOAwIaAxUA2Rys
// SIG // X196RXLTwA/P8RFWdUTpUsaggYMwgYCkfjB8MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EgMjAxMDANBgkqhkiG9w0BAQsF
// SIG // AAIFAO5avV4wIhgPMjAyNjA5MjAyMDE1MjZaGA8yMDI2
// SIG // MDkyMTIwMTUyNlowdzA9BgorBgEEAYRZCgQBMS8wLTAK
// SIG // AgUA7lq9XgIBADAKAgEAAgJL+QIB/zAHAgEAAgIaCzAK
// SIG // AgUA7lwO3gIBADA2BgorBgEEAYRZCgQCMSgwJjAMBgor
// SIG // BgEEAYRZCgMCoAowCAIBAAIDB6EgoQowCAIBAAIDAYag
// SIG // MA0GCSqGSIb3DQEBCwUAA4IBAQAuJ4ZNxc2l1r/3B/rM
// SIG // njFpJe/aXTlYHpJemW8bifFVvWwlYiDk6EzB/mZoxVmb
// SIG // zLlReK1qry15gn55L3mpoGmmL79drSwyuewDenwflC/p
// SIG // 4Qf3hqyDnsTtWAxy4y5vyPaJWfqzSjeaxEAEdVtnVoce
// SIG // kn7BjGSm2ns01bLCjC7GL5GBZFLo5yb3ztwJ1ORBkso3
// SIG // U/s7mPOAI6eOwGp4LdIX0Z6AvSvXcHkygmW/alhMPlFL
// SIG // 3qNPZpPeahOagrADM+fFvHTptD1FSEXV2ifCfGeZ8F1K
// SIG // +DyHshElSeN1FpUe3NhRZm2SOAP4ojWMgElj5X7oGtcR
// SIG // JCVIvPqDo/U33AKiMYIEDTCCBAkCAQEwgZMwfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAAIUjc0jRO4G
// SIG // 33IAAQAAAhQwDQYJYIZIAWUDBAIBBQCgggFKMBoGCSqG
// SIG // SIb3DQEJAzENBgsqhkiG9w0BCRABBDAvBgkqhkiG9w0B
// SIG // CQQxIgQgEHceBjtpLJi0lBACdS7GYDhwQIysuwrwkW5T
// SIG // 3a0wm0UwgfoGCyqGSIb3DQEJEAIvMYHqMIHnMIHkMIG9
// SIG // BCA2eKvvWx5bcoi43bRO3+EttQUCvyeD2dbXy/6+0xK+
// SIG // xzCBmDCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAACFI3NI0TuBt9yAAEAAAIUMCIEINGQ1Icd
// SIG // Ha+DlzGtC2avzAJr/EutjsDkwwZSQb9nQKQRMA0GCSqG
// SIG // SIb3DQEBCwUABIICAENzfG6Z5X8hgj81rzA+GJMSV5fY
// SIG // NMuaJLhPGrfd0XQ8XADCS722e4V0p+nGmraSZTsaqB8G
// SIG // h44fjpiJJEgnOy+CaQB7HPWHzgQP3bDJYAwGwSezIyit
// SIG // JnQjN0CX7z2B5dcAIuiOanJH+eypav/HEWqroEFnaA8j
// SIG // rpX22e8A7FdQxB4sZKzaHYY29LqMSTfc3g17VSstGJII
// SIG // GT7RjWKA4G4loXBlk/2jeH2Vi07atAHeiFpYoMEO8Jln
// SIG // Nemp4CR80ilg2bj4AYGhJVAKU1OCnHUlJPbTw/B2XAL6
// SIG // ARrmC0zJPDEaqUC2NH3wZK+Frewo79rmWUOpTYT27Tf3
// SIG // j4Ov9k9X8WPltKRUHDT0j63qKmGm/Kn38P0B4F47on5M
// SIG // vr1mh1zao/A/LFP44ES+r6BqPZ/yvQwiQguEshrxoHwZ
// SIG // c90i114qYrzah4h44F4CQEbCEajcKu7GvEn6Frgf7y3r
// SIG // e+hsgpoHnFHPZY8PsCFvNqHrrsr5gb6QjugA/oaZk0x+
// SIG // YLhVUTTQa7suGw+vq0DXpYrgNYIHVtM882RHjmHdf0i3
// SIG // UJAdGNNV33ZNGzDvarlDWzO/mnfxsqFOfiHtq/QpTG+V
// SIG // yb22UZw9oicBcVWYPC+FPV7HZC7EYTJGcLP5OxsPWsr5
// SIG // HhYxOYkBQUi3DPuylpjQ2Vy5iNCzaNAuLtUPHpcD
// SIG // End signature block
